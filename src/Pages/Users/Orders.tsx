import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Container from "../../components/ui/Container";
import axiosInstance, { IMG_URL } from "../../utils/axios";

type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Order = {
  _id: string;
  items: OrderItem[];
  billing: {
    firstName: string;
    city: string;
    phone: string;
    email: string;
  };
  paymentMethod: "bank" | "cash";
  total: number;
  status: "pending" | "processing" | "delivered" | "cancelled";
  createdAt: string;
};

const statusColors: Record<Order["status"], string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/orders")
      .then((res) => setOrders(res.data.orders))
      .catch(() => toast.error("Failed to load orders"))
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = async (id: string) => {
    const result = await Swal.fire({
      title: "Cancel Order?",
      text: "Are you sure you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB4444",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, cancel it",
    });

    if (!result.isConfirmed) return;

    try {
      await axiosInstance.patch(`/orders/${id}/cancel`);
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: "cancelled" } : o))
      );
      toast.success("Order cancelled");
    } catch {
      toast.error("Failed to cancel order");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading orders...
      </div>
    );

  return (
    <Container>
      <div className="py-10">
        <h2 className="text-2xl font-semibold mb-8">My Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-lg shadow-sm border p-6">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-black">Order ID:</span>{" "}
                    {order._id}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3">
                      <img
                        src={`${IMG_URL}${item.image}`}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t gap-3 text-sm">
                  <div className="text-gray-500 space-y-1">
                    <p>
                      <span className="font-medium text-black">Payment:</span>{" "}
                      {order.paymentMethod === "cash" ? "Cash on Delivery" : "Bank"}
                    </p>
                    <p>
                      <span className="font-medium text-black">Ship to:</span>{" "}
                      {order.billing.firstName}, {order.billing.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-lg font-semibold">
                      Total: ${order.total.toFixed(2)}
                    </p>
                    {order.status === "pending" && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="text-sm px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition"
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Orders;
