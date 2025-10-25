/**
 * Global gradient definitions for the project
 * These can be imported and used in any component
 */

export const gradients = {
  // Main brand gradient - teal to blue (like in the image)
  primary: "linear-gradient(135deg, #006064 0%, #0277bd 100%)",

  // Secondary gradients
  secondary: "linear-gradient(135deg, #00796b 0%, #1976d2 100%)",
  accent: "linear-gradient(135deg, #00bcd4 0%, #2196f3 100%)",

  // Button gradients
  buttonPrimary: "linear-gradient(90deg, #00838f 0%, #0288d1 100%)",
  buttonHover: "linear-gradient(90deg, #00acc1 0%, #039be5 100%)",

  // Text gradients (for headings)
  textGradient: "linear-gradient(90deg, #00bcd4 0%, #2196f3 100%)",

  // Background gradients
  backgroundLight:
    "linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(33, 150, 243, 0.1) 100%)",
  backgroundDark:
    "linear-gradient(135deg, rgba(0, 96, 100, 0.9) 0%, rgba(2, 119, 189, 0.9) 100%)",

  // Banner specific gradient (like in the image)
  banner: "linear-gradient(135deg, #006064 0%, #0277bd 100%)",

  // Navbar gradient
  navbar: "linear-gradient(90deg, #00838f 0%, #0288d1 100%)",
};

/**
 * CSS class strings for common gradient applications
 * These can be used directly in className props
 */
export const gradientClasses = {
  primaryBg: "bg-gradient-to-r from-[#083E4B] to-[#0288A6]",
  secondaryBg: "bg-gradient-to-r from-[#00796b] to-[#1976d2]",
  accentBg: "bg-gradient-to-r from-[#00bcd4] to-[#2196f3]",
  buttonBg:
    "bg-gradient-to-r from-[#00838f] to-[#0288d1] hover:from-[#00acc1] hover:to-[#039be5]",
  textGradient:
    "text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#2196f3]",
};

/**
 * Helper class name for gradient text
 * Use this with a span element to create gradient text
 * Example: <span className={gradientTextClass}>{text}</span>
 */
export const gradientTextClass =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#2196f3]";
