

export async function clean(speech) {

  
    var raw = speech;
  
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw
    };
  
    try {
      const response = await fetch("https://api.apilayer.com/bad_words?censor_character={censor_character}", requestOptions);
      const result = await response.json();
      return result.censored_content;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  }
  



const speech = "what the fuck";
clean(speech)
  .then(censoredContent => {
    console.log(censoredContent);
  })
  .catch(error => {
    console.error(error);
  });