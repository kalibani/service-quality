
module.exports = function scoringInstructor(nilai_harapan, nilai_kenyataan) {
  let nilai_harapan_fix = nilai_harapan.reduce((a,b) =>{
    return (a+b)
  })
  let nilai_kenyataan_fix = nilai_kenyataan.reduce((a,b)=>{
    return  (a+b)
  })
  return nilai_harapan_fix/nilai_harapan.length - nilai_kenyataan_fix/nilai_kenyataan.length;
};
