// Fonction pour mélanger un tableau
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

// Fonction pour vérifier la validité d'un mail
export function mailIsValid(mail){
    let regex = new RegExp('[a-zA-Z-0-9]+@[a-zA-Z]+.[a-zA-Z-0-9]{2,}$');
    let check = false;
    if(regex.test(mail)){
        check = true;
    }
    return check
}

// Fonction pour télécharger un fichier
export function download(file) {
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)
  
    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
  
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }