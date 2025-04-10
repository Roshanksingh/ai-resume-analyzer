export default function ErrorMessage({ message }: { message: string }) {
  return <div className="mt-6 text-red-600 font-semibold">⚠️ {message}</div>;
}
