const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-zinc-300 p-4">
      <div className="w-full max-w-md bg-zinc-100 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Get in touch</h1>
          <p className="text-gray-500 mt-2">We'd love to hear from you!</p>
        </div>

        <form action="#" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="hello@example.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
            <textarea 
              rows="4"
              placeholder="How can we help?" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;