// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

function pAequorFactory(num, arr) {
  if (typeof num === 'number'){
    return {
    specimenNum: num,
    dna: arr,
    mutate () {
      const r = Math.floor(Math.random() * (this.dna.length))
      const dnaBases = ['A', 'T', 'C', 'G']

      let newBase = dnaBases.filter(x => x !== this.dna[r])
      let mutation = newBase[Math.floor(Math.random() * 3)]
      while (mutation !== this.dna[r]) {
        this.dna[r] = mutation
        return this.dna
      }
    },
    compareDNA (obj) {
      let matches = []

      for (let x in this.dna) {
        for (let x in obj.dna) {
          if (this.dna[x] === obj.dna[x]){
            matches.push(obj.dna[x])
          }
        }
        percen = Math.floor((matches.length / 15 * 100)) + '%'
        return `specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${percen} DNA in common.`
        }
    },
    willLikelySurvive() {
      const cgBases = this.dna.filter(base => base === 'C' || base === 'G')
      const percen = Math.floor((cgBases.length / 15) * 100)

      if (percen > 60) {
        return true
      } else {
        return false
      }
    }
  };
  } else {
    return 'Please enter a valid specimen number'
  };
};

function createSpecies(num) {
  const speciesArr = []
  let id = 1
  while (speciesArr.length < num) {
    let newSpecimen = pAequorFactory(id, mockUpStrand());
    if (newSpecimen.willLikelySurvive()) {
      speciesArr.push(newSpecimen);
    }
    id++;
  }
  return speciesArr
};

thirtySpecies = createSpecies(30);
console.log(thirtySpecies)

// console.log(thirtySpecies.length)

/*
for (let x in thirtySpecies) {
  console.log(thirtySpecies[x].willLikelySurvive())
}
*/

// console.log(mockUpStrand())
/*
let one = pAequorFactory(1, [ 'T', 'G', 'T', 'G', 'A', 'C', 'C', 'A', 'T', 'C', 'A', 'G', 'T', 'T', 'G' ]);

let two = pAequorFactory(2, [ 'T', 'G', 'T', 'G', 'A', 'C', 'C', 'A', 'T', 'C', 'A', 'G', 'T', 'T', 'G' ]);

let three = pAequorFactory(3, [ 'T', 'G', 'C', 'G', 'T', 'T', 'T', 'T', 'A', 'A', 'A', 'G', 'A', 'T', 'A' ]);

let four = pAequorFactory(4, [ 'G', 'G', 'C', 'G', 'C', 'G', 'G', 'G', 'C', 'G', 'C', 'G', 'C', 'G', 'G' ]);
*/

// console.log(one.dna)
// console.log(four.willLikelySurvive());
// one.mutate()
//console.log(two.dna)
//console.log(three.dna)

// console.log(one.compareDNA(three))