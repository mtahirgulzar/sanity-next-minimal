const TextWithImage = ({data}) => {
    console.log("data",data)
    return (<div className={`${data.layout==='greyBg'?"bg-gray-100":data.layout==='darkGreyBg'?"bg-gray-200":""}`}>
    
    Text with Image
    </div>);
  };
  export default TextWithImage;