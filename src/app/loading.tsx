export default function LoadingSpinnerWithText() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
