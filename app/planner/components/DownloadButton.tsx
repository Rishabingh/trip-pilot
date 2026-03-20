"use client"
const DownloadButton = ({markdown}: {markdown?: string}) => {
  if (!markdown) {
    return;
  }

  const downloadMd = () => {
    const blob = new Blob([markdown], {type: 'text/markdown'});
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.md'
    a.click();

    URL.revokeObjectURL(url);
  }
  return (
    <button 
    className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-md cursor-pointer"
    onClick={downloadMd}
    >
      Download Md File
    </button>
  )
}

export default DownloadButton