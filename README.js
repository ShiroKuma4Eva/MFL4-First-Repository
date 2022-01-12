# MFL4-First-Repository
function splice(data, add ,start = 0, del = 0) {
  // Insert your code here
  let output = []

  if (Array.isArray(data) && data) {
    let s = 0
    while (s < data.length) {
      if (s === start) {
        output.push (add)
        if (del) {
          for (let t = 1; t < (start + del); t++) {
            s++
          }
        }
        if (s < data.length) {
          output.push (data[s])
        }
      } else {
        output.push (data[s])
      }
      s++
    }
    return output
  } else {
    return []
  }
} 
// Test case: hasil function splice()
console.log(splice(['idaz', 'fajrin', 'samir'], 'anggara', 1, 2))
// [ 'idaz', 'anggara' ]
console.log(splice(['eko', 'basil', 'abdullah', 'dear'], 'idaz', 3, 0))
// [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]
console.log(splice([100, 200, 300], '150', 1, 0))
// [ 100, '150', 200, 300 ]


// Test case: function menerima parameter start dan del kosong!
console.log(splice(['anggara'], 'idaz'))
// [ 'idaz', 'anggara' ]


// Test case: function menerima parameter del kosong!
console.log(splice(['aku', 'kamu'], 'dia', 1))
// [ 'aku', 'dia', 'kamu' ]


// Test case: catch error!
console.log(splice('aku', 'dia'))
// []
console.log(splice())
// []

module.exports = splice
