import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TravelPlanResult = ({ markdown }: { markdown?: string }) => {
  if (!markdown) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-10 p-12 rounded-2xl bg-gray-50/60 border border-gray-200 text-center flex flex-col items-center justify-center gap-3">
        <h3 className="text-xl font-semibold text-gray-800">No Itinerary Yet</h3>
        <p className="text-gray-500">
          Your generated travel plan will appear here. Let&apos;s plan your next trip!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-2 md:mx-auto mt-12 mb-24 px-4 sm:px-0">
      
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Your Travel Plan
      </h2>

      {/* Clean, minimalist card container */}
      <div className="bg-white/60 rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">

        <div
          className="
            prose 
            prose-lg 
            max-w-none

            /* Typography Basics */
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
            
            /* Headings - Structured for an Itinerary */
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            
            /* Lists - EXPLICITLY RESTORED FOR READABILITY */
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mt-2 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mt-2 prose-ol:mb-6
            prose-li:text-gray-700 prose-li:my-1.5 prose-li:pl-2
            
            /* Blockquotes for Tips/Notes */
            prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:text-gray-700 prose-blockquote:not-italic prose-blockquote:rounded-r-lg
            
            /* Tables for Budgets/Packing */
            prose-table:w-full prose-table:my-8 prose-table:border-collapse
            prose-th:bg-gray-50 prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-gray-200 prose-th:font-semibold prose-th:text-gray-900
            prose-td:p-3 prose-td:border prose-td:border-gray-200 prose-td:text-gray-700
          "
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>

      </div>
    </div>
  );
};

export default TravelPlanResult;