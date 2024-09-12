import { motion } from 'framer-motion';

const ProgressBar: React.FC<{ progressBarWidth: string }> = ({ progressBarWidth }) => {
  return (
    <div className="w-full bg-gray-600 h-2 mt-4 rounded-full overflow-hidden mx-2">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-azulGradiente to-verdeGradiente"
        style={{
          width: progressBarWidth,
        }}
        initial={{ width: 0 }}
        animate={{ width: progressBarWidth }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default ProgressBar;



