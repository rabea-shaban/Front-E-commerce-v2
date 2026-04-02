import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../App/store";
import { clearCart } from "../../App/slices/cartSlice";
import { IMG_URL } from "../../utils/axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axios";
import { AxiosError } from "axios";

type BillingForm = {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phone: string;
  email: string;
  paymentMethod: "bank" | "cash";
};

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BillingForm>({ defaultValues: { paymentMethod: "cash" } });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const onSubmit = async (data: BillingForm) => {
    if (cart.length === 0) {
      Swal.fire({ icon: "error", title: "Cart is empty 🛒", confirmButtonColor: "#DB4444" });
      return;
    }

    const result = await Swal.fire({
      title: "Confirm Order?",
      text: "Do you want to place this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#DB4444",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, place order",
    });

    if (!result.isConfirmed) return;

    try {
      await axiosInstance.post("/orders", {
        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity || 1,
          image: item.image,
        })),
        billing: {
          firstName: data.firstName,
          companyName: data.companyName,
          streetAddress: data.streetAddress,
          apartment: data.apartment,
          city: data.city,
          phone: data.phone,
          email: data.email,
        },
        paymentMethod: data.paymentMethod,
        total: subtotal,
      });

      dispatch(clearCart());

      Swal.fire({
        icon: "success",
        title: "Order Placed 🎉",
        text: "Your order has been successfully placed!",
        confirmButtonColor: "#DB4444",
      }).then(() => navigate("/"));
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: error.response?.data?.message || "Something went wrong",
          confirmButtonColor: "#DB4444",
        });
      }
    }
  };

  return (
    <Container>
      <p className="text-sm text-gray-400 mt-6 mb-10">
        Account / <Link to="/account"> My Account</Link> /{" "}
        <Link to="/products"> Product</Link> /{" "}
        <Link to="/account/cart"> View Cart</Link> / CheckOut
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>
            <div className="space-y-5">
              <div>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="First Name *"
                  className="input w-full border px-4 py-3 rounded-md outline-none"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>

              <input
                {...register("companyName")}
                placeholder="Company Name"
                className="input w-full border px-4 py-3 rounded-md outline-none"
              />

              <div>
                <input
                  {...register("streetAddress", { required: "Street address is required" })}
                  placeholder="Street Address *"
                  className="input w-full border px-4 py-3 rounded-md outline-none"
                />
                {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress.message}</p>}
              </div>

              <input
                {...register("apartment")}
                placeholder="Apartment, floor, etc. (optional)"
                className="input w-full border px-4 py-3 rounded-md outline-none"
              />

              <div>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="Town/City *"
                  className="input w-full border px-4 py-3 rounded-md outline-none"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  placeholder="Phone Number *"
                  className="input w-full border px-4 py-3 rounded-md outline-none"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email Address *"
                  className="input w-full border px-4 py-3 rounded-md outline-none"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={`${IMG_URL}${item.image}`} className="w-12 h-12 object-cover" />
                    <p>{item.name}</p>
                  </div>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              ))}
            </div>

            {cart.length === 0 && <p className="text-gray-500 mt-5">Your cart is empty</p>}

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-medium pt-2">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 space-y-4">
              <label className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <input {...register("paymentMethod")} type="radio" value="bank" />
                  Bank
                </span>
                <div className="flex gap-3">
                  <img src="/Bkash.png" alt="Bkash" />
                  <img src="/Visa.png" alt="Visa" />
                  <img src="/Mastercard.png" alt="Mastercard" />
                  <img src="/Nagad.png" alt="Nagad" />
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input {...register("paymentMethod")} type="radio" value="cash" />
                Cash on delivery
              </label>
            </div>

            {/* Coupon */}
            <div className="flex gap-4 mt-6">
              <input
                placeholder="Coupon Code"
                className="border px-4 py-3 w-full rounded-md outline-none text-sm"
              />
              <button type="button" className="bg-red-500 text-white px-6 rounded-md hover:bg-red-600 transition">
                Apply Coupon
              </button>
            </div>

            <button
              type="submit"
              disabled={cart.length === 0 || isSubmitting}
              className="mt-6 bg-red-500 disabled:bg-gray-300 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
