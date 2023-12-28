
  function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var resumeUrl = 'https://drive.google.com/file/d/1mMk7rOoXrxjuSpZF-DrOSaWNSMcCjQON/view?usp=drive_link';
    
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Resume Latest.pdf'; // Specify the filename to be used when downloaded

    // Dispatch the click event on the link element to initiate the download
    link.dispatchEvent(new MouseEvent('click'));
  }

 


