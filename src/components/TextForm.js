import React, { useState } from 'react'
import './TextForm.css';



export default function TextForm(props) {

    const handleUpConvert = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "success");
    }

    const handleLoConvert = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case", "success");
    }

    const handleSeConvert = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("Converted To Sentence Case", "success");
    }

    const handleCaConvert = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted To Capitalized Case", "success");
    }

    const handleInConvert = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLowerCase();
            } else {
                newText += text[i].toUpperCase();
            }
        }
        setText(newText);
        props.showAlert("Converted To Invert Case", "success");
    }

    const handleCpConvert = () => {
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Has Been Copied", "success");
    }

    const handleDtConvert = () => {
        // Create a Blob containing the text
        const blob = new Blob([text], { type: 'text/plain' });

        // Create a link element
        const downloadLink = document.createElement('a');

        // Set the href attribute of the link to the Blob
        downloadLink.href = URL.createObjectURL(blob);

        // Set the download attribute to specify the filename
        downloadLink.download = 'Text_Editer.txt';

        // Append the link to the document body
        document.body.appendChild(downloadLink);

        // Programmatically click the link to trigger the download
        downloadLink.click();

        // Remove the link from the document body
        document.body.removeChild(downloadLink);
        props.showAlert("File Has Been Downloaded", "success");
    }

    const handleDtwConvert = () => {
        // Create a Blob containing the text
        const blob = new Blob([text], { type: 'text/plain' });

        // Create a link element
        const downloadLink = document.createElement('a');

        // Set the href attribute of the link to the Blob
        downloadLink.href = URL.createObjectURL(blob);

        // Set the download attribute to specify the filename
        downloadLink.download = 'Text_Editer.doc';

        // Append the link to the document body
        document.body.appendChild(downloadLink);

        // Programmatically click the link to trigger the download
        downloadLink.click();

        // Remove the link from the document body
        document.body.removeChild(downloadLink);
        props.showAlert("File Has Been Downloaded", "success");
    }

    const handleClConvert = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear TextArea ", "success");
    }

    const handlestConvert = () => {
    const textAreaId = "myBox";
    const textArea = document.getElementById(textAreaId);
    const speechButton = document.getElementById("btn_speech"); // Assuming you have a button with the ID "speechButton"

    if (textArea) {
        const synth = window.speechSynthesis;
        const voice = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        voice.text = textArea.value;

        if (synth.speaking) {
            // If speech is already in progress, stop it
            synth.cancel();
            speechButton.style.backgroundColor = "#0dcaf0";
            speechButton.style.color = "#000";  // Reset button background color
            speechButton.innerText = " Text To Speech"; // Reset button text

            props.showAlert("Speech Has Stop ", "success");

        } else {
            // Start speech
            synth.speak(voice);
            speechButton.style.backgroundColor = "#dc3545"; // Set button background color to red
            speechButton.style.color = "white"; // Set button background color to red
            speechButton.innerText = "Stop Speech"; // Change button text

            props.showAlert("Start Speech ", "success");
            
        }

        voice.onend = () => {
            speechButton.style.backgroundColor = "#0dcaf0";
            speechButton.style.color = "#000";  // Reset button background color
            // Reset button background color
            speechButton.innerText = " Text To Speech";

            props.showAlert("Speech Has Been Ended ", "success");

        }
    } else {
        console.error("Text area with ID '" + textAreaId + "' not found.");
    }
};


    // const handlecstConvert = () => {
    //     let synth = window.speechSynthesis;
    //     let voice = new SpeechSynthesisUtterance();
    //     let textAreaId = "myBox";
    //     let textArea = document.getElementById(textAreaId);

    //     const btn_speech = document.getElementById("btn_speech");

    //     btn_speech.style.visibility = "hidden";
    //     // Set the text to be spoken
    //     voice.text = textArea.value;
    //     synth.cancel(voice);

    // }

    const handleExConvert = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Has Been Removed", "success");
    }

    const onChangeHandle = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const word_count = text.match(/\b\w+\b/g)?.length || 0;
    const char_count = text.length;

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 id="heading">{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Enter Your Text Here</label> */}
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'darkgrey' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }} value={text} onChange={onChangeHandle} rows="8" placeholder='Enter Text Here'></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleUpConvert} > UPPER CASE</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleLoConvert} > lower case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleSeConvert} > Sentence case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleCaConvert} > Capitalized Case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleInConvert} > Invert Case</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 mt-2' onClick={handleExConvert} > Remove ExtraSpaces</button>
                <button disabled={text.length === 0} className='btn btn-info mx-1 mt-2' onClick={handleCpConvert} > Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-info mx-1 mt-2' onClick={handlestConvert} id="btn_speech"> Text To Speech</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 mt-2' onClick={handleDtConvert} > Download Text File</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 mt-2' onClick={handleDtwConvert} > Download Doc File</button>
                {/* <button disabled={text.length === 0} className='btn btn-danger mx-1 mt-2' onClick={handlecstConvert} id="btn_speech" style={{ visibility: 'hidden', borderRadius: "50%" }}>X</button> */}
                <button disabled={text.length === 0} className='btn btn-danger mx-1 mt-2' onClick={handleClConvert} >Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Summary Text</h2>

                <p><b>{word_count}</b> Words | <b>{char_count}</b> Characters</p>
                <p><b>{0.008 * word_count}</b> Minutes To Read</p>
                <h2>Preview Text</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>
        </>
    )
}
