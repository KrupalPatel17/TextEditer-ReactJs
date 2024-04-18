import React from 'react'

export default function About(props) {


    // const [btn,setbtn] = useState('Enable Dark Mode');
    // const [myStyle,setmyStyle] = useState( {
    //     color:'black',
    //     backgroundColor: 'white'  
    //   })

    //  const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor: 'black'  
    //         })
    //         setbtn("Enable White Mode");
    //     }else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor: 'white'  
    //         })
    //         setbtn("Enable Black Mode");
    //     }
    //   }

    return (
        <div className='container mt-5 pt-4' style={{ backgroundColor: props.mode === 'dark' ? '#000e23' : 'white' }}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#e0e0e0 ' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? '#616161 ' : 'white', color: props.mode === 'dark' ? 'white ' : 'black' }}>
                            Functionality
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong> <u>Text Transformation Magic:</u> </strong> Our platform seamlessly converts your text to various formats: <br />
                            <strong> Uppercase: </strong>SHOUT your message!<br />
                            <strong>Lowercase:</strong> Whisper softly.<br />
                            <strong>Sentence Case:</strong> Properly formatted sentences.<br />
                            <strong> Invert Case:</strong> tXeT rEVErsEd!<br />
                            <strong> Capitalized Case:</strong> Title-style text.<br /><br />
                            <strong> <u>Text-to-Speech:</u></strong> Listen to your converted text! Our website reads it aloud for you.<br /><br />
                            <strong><u>Download You Converted Text:</u></strong> You Can Download Your Converted Text In Different Formats Like .txt or .doc .<br /><br />
                            <strong><u> Word & Character Analytics:</u></strong> Get insights into your content:<br />
                            <strong>Word count:</strong>How much have you written?<br />
                            <strong> Character count:</strong> Every keystroke matters!<br />
                            <strong> Estimated Reading Time:</strong>Know how long it’ll take to read your text.<br />
                            <strong> Preview Your Edits: </strong> See a live preview of your input before finalizing changes.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(144 144 144)' : 'white', color: props.mode === 'dark' ? 'white ' : 'black' }}>
                            Terms and Conditions
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#e0e0e0 ' : 'white' }}>
                        <div className="accordion-body" >
                            <strong>1. Acceptance of Terms</strong><br />
                            By accessing and using our website, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our services.<br /><br />

                            <strong>2. Intellectual Property</strong><br />
                            All content on this website, including text, images, logos, and software, is protected by intellectual property laws.<br />
                            You may not reproduce, distribute, or modify any content without our explicit consent.<br /><br />
                            <strong> 3. User Conduct</strong><br />
                            You are responsible for the accuracy and legality of any content you submit.<br />
                            Do not engage in harmful, illegal, or abusive behavior on our platform.<br /><br />
                            <strong> 4. Text Conversion Services</strong><br />
                            Our website provides text conversion services (e.g., uppercase, lowercase, sentence case). Use them responsibly.<br />
                            We do not guarantee the accuracy or completeness of converted text.<br /><br />
                            <strong> 5. Text-to-Speech Feature</strong><br />
                            Our text-to-speech functionality allows you to listen to converted text.<br />
                            Use this feature for personal use only.<br /><br />
                            <strong> 6. Analytics and Privacy</strong><br />
                            We collect anonymous data for analytics purposes. Read our Privacy Policy for details.<br />
                            Protect your login credentials and personal information.<br /><br />
                            <strong>7. Limitation of Liability</strong><br />
                            We are not liable for any direct, indirect, or consequential damages arising from your use of our services.<br />
                            Use our website at your own risk.<br /><br />
                            <strong> 8. Changes to Terms,</strong><br />
                            We reserve the right to modify these Terms and Conditions. Check back periodically for updates.<br />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? '#616161 ' : 'white', color: props.mode === 'dark' ? 'white ' : 'black' }}>
                            Developed By
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#e0e0e0 ' : 'white' }}>
                        <div className="accordion-body">
                            <strong><code><u style={{fontSize:20}}>Krupal P. Patel</u></code></strong><br/>
                            <strong>Developed Platform:</strong>React JS, Node JS, Bootstrap, CSS <br />
                            <strong>Developed At:</strong>March-2024 <br />
                            © 2024 TextEditer All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-primary mx-1 mt-1' onClick={toggleStyle}>{btn}</button> */}

        </div>
    )
}
