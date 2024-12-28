import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreatePost = () => {
  const [prompt, setPrompt] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const controls = useAnimation();

  const examplePrompts = [
    {
      prompt: "An enchanted forest at twilight with glowing mushrooms and fairy lights scattered among ancient trees",
      category: "Nature"
    },
    {
      prompt: "A futuristic cyberpunk cityscape at night with neon signs and flying vehicles",
      category: "Urban"
    },
    {
      prompt: "A mystical warrior wielding an ethereal sword, surrounded by swirling magical energy",
      category: "Character"
    }
  ];

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #1e3a8a, #9333ea)',
        'linear-gradient(45deg, #9333ea, #1e40af)',
        'linear-gradient(45deg, #1e40af, #1e3a8a)',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setPreviewImage('/api/placeholder/400/400');
  };

  const handleExampleClick = (promptText) => {
    if (!name.trim()) {
      // Alert the user to enter their name first
      alert('Please enter your name before generating the image!');
    } else {
      setPrompt(promptText);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="sm:mb-5" />
      <motion.div className="flex-grow" animate={controls}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[calc(100vh-4rem)] py-8 px-4 gap-8">
          {/* Left Half: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/5 mx-auto bg-gray-900 bg-opacity-80 backdrop-blur-lg text-white mb-8 md:mb-0 border-blue-500 border-2 rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="p-8 flex-grow">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Sparkles className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-blue-400 text-center">
                  AI Image Creator
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-300 mb-8 text-center"
              >
                Transform your imagination into stunning visuals
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-50 border-2 border-blue-500/50 text-white placeholder-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Vision
                    </label>
                    <textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full bg-gray-800 bg-opacity-50 border-2 border-blue-500/50 text-white placeholder-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-32 resize-none"
                      placeholder="Describe what you'd like to create..."
                    />
                  </div>

                  {/* Example Prompts Section */}
                  <div className="mt-2">
                    <p className="text-xs text-gray-400 mb-2">Need inspiration? Try one of these:</p>
                    <div className="grid gap-2">
                      {examplePrompts.map((example, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleExampleClick(example.prompt)}
                          className="p-2 bg-gray-800/50 rounded-md border border-blue-500/20 hover:border-blue-500/40 text-left transition-all duration-200"
                        >
                          <div className="text-gray-400 text-xs font-semibold line-clamp-1">{example.prompt}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading || (prompt.trim() === '' && name.trim() === '')}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <ImageIcon className="w-5 h-5" />
                    {isLoading ? 'Generating...' : 'Generate Image'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    disabled={isLoading || !previewImage}
                    className="flex-1 bg-gradient-to-r from-rose-600 to-red-500 hover:from-red-500 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Upload className="w-5 h-5" />
                    Post Image
                  </motion.button>
                </div>
              </form>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 text-center"
                >
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  <p className="mt-2 text-blue-400">Creating your masterpiece...</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Half: Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:mr-3 md:w-1/2 aspect-square md:aspect-auto md:h-[700px] bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-2xl border-2 border-blue-500 p-4 flex flex-col"
          >
            <h3 className="text-white text-xl font-bold mb-4 text-center">Preview</h3>
            <div className="flex-1 border-2 border-dashed border-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
              {previewImage ? (
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={previewImage}
                  alt="Generated preview"
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="text-center p-4">
                  <ImageIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium">Your creation will appear here</p>
                  <p className="text-gray-400 text-sm mt-2">Generate an image to see the preview</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CreatePost;
