export default function Contact() {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">Email: {process.env.OWNER_EMAIL}</p>
    </div>
  );
}
