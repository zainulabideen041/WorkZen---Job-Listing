import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#5B9FF8] leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-[#4FD1C5] text-white rounded-md hover:bg-[#44a39d] transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-3 border-2 border-[#4FD1C5] text-[#4FD1C5] rounded-md hover:bg-[#4FD1C5] hover:text-white transition-colors font-medium"
          >
            Dashboard
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-6xl opacity-20">
          <span>🔍</span>
          <span>❓</span>
          <span>🤔</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
