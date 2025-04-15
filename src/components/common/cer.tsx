import React, { useState } from 'react';
import html2canvas from 'html2canvas';

function CertificateGenerator() {
    const [participantName, setParticipantName] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [generatedCertificate, setGeneratedCertificate] = useState(null);

    const generateCertificate = () => {
        // Create a reference to the certificate template image
        const certificateTemplate = document.getElementById('certificate-template');

        // Use html2canvas to capture the content of the template
        html2canvas(certificateTemplate).then((canvas: any) => {
            const certificateImage = canvas.toDataURL('image/png');
            setGeneratedCertificate(certificateImage);
        });
    };

    return (
        <div>
            <h1>Certificate Generator</h1>

            <div>
                <label>Participant Name:</label>
                <input
                    type="text"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                />
            </div>

            <div>
                <label>Course Title:</label>
                <input
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Completion Date:</label>
                <input
                    type="date"
                    value={completionDate}
                    onChange={(e) => setCompletionDate(e.target.value)}
                />
            </div>

            <button onClick={generateCertificate}>Generate Certificate</button>

            {generatedCertificate && (
                <div>
                    <h2>Generated Certificate</h2>
                    <img src={generatedCertificate} alt="Certificate" />
                    <a
                        href={generatedCertificate}
                        download="certificate.png"
                    >
                        Download Certificate
                    </a>
                </div>
            )}

            <div id="certificate-template" style={{ display: 'none' }}>
                {/* This is where you would display your certificate template */}
                <img src="certificate-template.png" alt="Certificate Template" />
                <div className="participant-name">{participantName}</div>
                <div className="course-title">{courseTitle}</div>
                <div className="completion-date">{completionDate}</div>
            </div>
        </div>
    );
}

export default CertificateGenerator;
