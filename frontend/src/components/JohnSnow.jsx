import "../styles/introSection.css";

const JohnSnow = () => {
  return (
    <div className="flex flex-row justify-evenly w-full p-4 name-section">
      <div className="flex flex-col justify-center items-start w-[50%] mx-10">
        <h2 className="heading-font my-1 ">Our Research Inspiration</h2>
        <div className="hr-container">
          <hr id="horizontal-line"/>
        </div>
        <p className="subheading-font my-5">While dealing with excessive amounts of handwritten clinical notes, medical professionals have a significant difficulty in effectively understanding diagnoses. We provide a solution that makes use of cutting-edge Clinical Natural Language Processing (NLP) to address this challenge head-on. Our goal is to improve medical documentation accuracy and efficiency by automating the summarization of handwritten clinical notes, with its multilingual support and automated important information extraction feature.</p>
        <a href="https://www.johnsnowlabs.com/" target="_blank" rel="noopener noreferrer">
          <button className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 font-bold py-2 px-4 rounded-full w-[9rem]" id="jsl-link-button">
            Know more
          </button>
        </a>

      </div>
      <div>
        <img src="https://www.johnsnowlabs.com/wp-content/uploads/2019/07/johnsnowlabs_logo.png" alt="Medical Illustration" className="w-[600px] my-40"/>
      </div>
    </div>
  );
}

export default JohnSnow;
