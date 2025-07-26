import React from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/resume.css";

const Resume = () => {
	const resumePdfPath = "/resume/resume-21-07-2025.pdf";
	
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = resumePdfPath;
		link.download = 'Sivakorn_Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="resume-container">
						<div className="resume-header">

						</div>
						
						<div className="resume-viewer">
							<div className="pdf-container">
								<iframe
									src={`${resumePdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
									title="Resume Preview"
									className="pdf-iframe"
									loading="lazy"
								/>
							</div>
							<div className="pdf-fallback">
								<p>If the PDF doesn't load, you can:</p>
								<a 
									href={resumePdfPath} 
									target="_blank" 
									rel="noopener noreferrer"
									className="fallback-link"
								>
									Open PDF in new tab
								</a>
								<span className="fallback-separator"> or </span>
								<button 
									onClick={handleDownload}
									className="fallback-download"
								>
									Download directly
								</button>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Resume;