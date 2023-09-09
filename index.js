// Fungsi untuk menghasilkan nilai acak dari 1 sampai 50
function generateNilaiAcak(){
    return Math.floor(Math.random() * 50) + 1
}

// Fungsi untuk mengisi array dengan 100 nilai random
function isiArrayNilaiAcak(){
    const tmp = []
    for(let i=0; i < 100; i++){
        tmp.push(generateNilaiAcak())
    }
    return tmp
}

//Ini adalah array utama yang diisi dengan nilai acak 1 sampai 50 sebanyak 100 index
const randomArray = isiArrayNilaiAcak()

console.log("Array dengan jumlah index 100 : ", randomArray)

// Fungsi untuk membagi dua array menjadi array pada index ganjil dan array pada index genap
function bagiDuaArray(randomArray){
    const tmpGanjil = []
    const tmpGenap = []
    for(let i=0; i < randomArray.length; i++){
        if(i % 2 === 0){
            tmpGenap.push(randomArray[i])
        } else {
            tmpGanjil.push(randomArray[i])
        }
    }
    return [tmpGanjil, tmpGenap]
}

const [tmpGenap, tmpGanjil] = bagiDuaArray(randomArray); 

console.log("Array genap dengan jumlah index 50 : ", tmpGenap);
console.log("Array ganjil dengan jumlah index 50 : ", tmpGanjil);

// Fungsi untuk menghitung minimum
function cariMinArray(randomArray){
    let minimum = randomArray[0]
    for(let i=1; i < randomArray.length; i++){
        if(randomArray[i] < minimum){
            minimum = randomArray[i]
        }
    }
    return minimum
}

const minArrayGanjil =  cariMinArray(tmpGanjil)
console.log("Nilai minimum pada indeks ganjil adalah ", minArrayGanjil)
const minArrayGenap = cariMinArray(tmpGenap)
console.log("Nilai minimum pada indeks genap adalah ", minArrayGenap)

//Fungsi untuk menghitung maksimum
function cariMaxArray(randomArray){
    let maksimum = randomArray[0]
    for(let i=1; i < randomArray.length; i++){
        if(randomArray[i] > maksimum){
            maksimum = randomArray[i]
        }
    }
    return maksimum
}

const maxArrayGanjil = cariMaxArray(tmpGanjil)
console.log("Nilai maksimum pada indeks ganjil adalah ", maxArrayGanjil)
const maxArrayGenap = cariMaxArray(tmpGenap)
console.log("Nilai maksimum pada indeks ganjil adalah ", maxArrayGenap)

// Fungsi untuk menghitung total
function totalNilaiArray(randomArray){
    let total = 0
    for(let i=0; i < randomArray.length; i++){
        total += randomArray[i]
    }
    return total
}

const totalArrayGanjil = totalNilaiArray(tmpGanjil)
console.log("Total dari array ganjil adalah ", totalArrayGanjil)
const totalArrayGenap = totalNilaiArray(tmpGenap)
console.log("Total dari array genap adalah ", totalArrayGenap)

// Fungsi untuk menghitung rata-rata
function averageArray(randomArray){
    let totalNilai = totalNilaiArray(randomArray)
    return totalNilai / randomArray.length
}

const averageArrayGanjil = averageArray(tmpGanjil)
console.log("Rata-rata dari array ganjil adalah ", averageArrayGanjil)
const averageArrayGenap = averageArray(tmpGenap)
console.log("Rata-rata dari array genap adalah ", averageArrayGenap)

// Perbandingan min, max, total, dan rata-rata
if(minArrayGanjil > minArrayGenap){
    console.log("Min lebih besar array ganjil")
} else {
    console.log("Min lebih besar array genap")
}

if(maxArrayGanjil > maxArrayGenap){
    console.log("Max lebih besar array ganjil")
} else {
    console.log("Max lebih besar array genap")
}

if(totalArrayGanjil === totalArrayGenap){
    console.log("Total memiliki nilai sama antara array genap dan ganjil")
} else {
    console.log("Total tidak memiliki nilai sama antara array genap dan ganjil")
}

if(averageArrayGanjil > averageArrayGenap){
    console.log("Rata-rata lebih besar array ganjil")
} else {
    console.log("Rata-rata tidak lebih besar array ganjil")
}