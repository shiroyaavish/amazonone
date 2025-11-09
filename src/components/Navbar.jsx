import React, { useEffect, useState } from "react";
import { Search, Heart } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const updateWishlistCount = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(wishlist.length);
    } catch (err) {
      console.error("Error reading wishlist:", err);
    }
  };

  // ✅ Listener for localStorage changes
  useEffect(() => {
    updateWishlistCount(); // Initial load

    // Listen for storage changes (from other tabs)
    const handleStorageChange = (event) => {
      if (event.key === "wishlist") {
        updateWishlistCount();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // ✅ Custom event listener for same-tab updates
    const handleCustomWishlistChange = () => updateWishlistCount();
    window.addEventListener("wishlistUpdated", handleCustomWishlistChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("wishlistUpdated", handleCustomWishlistChange);
    };
  }, []);

  // ✅ Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md"
            : "bg-white shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between gap-2 h-16 md:h-20">
            {/* 🔹 Brand */}
            <div className="shrink-0">
              <p className="text-lg md:text-3xl font-bold bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent cursor-pointer select-none whitespace-nowrap">
                amazon
                <span className="text-black">one.</span>
              </p>
            </div>

            {/* 🔹 Search Bar */}
            <div className="flex-1 flex justify-center md:justify-center">
              <div
                className="
                  relative w-full
                  max-w-full sm:max-w-lg md:max-w-2xl
                  transition-all
                "
              >
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5"
                />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="
                    w-full
                    pl-10 pr-3
                    py-2.5 md:py-3
                    bg-gray-50 rounded-2xl
                    outline-none
                    text-gray-700 placeholder-gray-400
                    transition-all duration-300
                    text-sm md:text-base
                    focus:ring-2 focus:ring-green-500
                    sm:text-base
                  "
                />
              </div>
            </div>

            {/* 🔹 Wishlist */}
            <a
              href="/wishlist"
              className="relative shrink-0 group"
              title="Wishlist"
            >
              <Heart
                className="w-5 h-5 md:w-7 md:h-7 text-gray-600 group-hover:text-green-600 transition"
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] md:text-xs font-semibold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
