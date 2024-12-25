import { motion } from "framer-motion";

export function TextInput({ value, onChange, placeholder }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-lg text-blue-100 bg-gray-800 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300 placeholder-blue-300"
      />
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: value ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-left"
      />
    </motion.div>
  );
}

export default TextInput;