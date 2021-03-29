const bomdia = _ => console.log('Acordando!!');


const cafe = _ => console.log('Bora tomar café!!');


const soneca = _ => console.log('Partiu dormir!!');

const doingThings = (call) => {
  if (call === bomdia) {
    bomdia();
  } else if (call === cafe) {
    cafe();
  } else {
    soneca();
  };
}

doingThings(soneca);