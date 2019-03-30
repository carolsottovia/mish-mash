const groupAdultsByAgeRange = (peoples) => {

    if(peoples.length==0) return {}

    const peopleCount = peoples.filter((people)=>people.age >= 18)
    category1 = peopleCount.filter((people)=>people.age <=20)
    category2 = peopleCount.filter((people)=>people.age >20 && people.age <=30)
    category3 = peopleCount.filter((people)=>people.age >30 && people.age <=40)
    category4 = peopleCount.filter((people)=>people.age >40 && people.age <=50)
    category5 = peopleCount.filter((people)=>people.age >50)
    
    let result = {}
    if(category1.length > 0) result["20 and younger"] = category1
    if(category2.length > 0) result["21-30"] = category2
    if(category3.length > 0) result["31-40"] = category3
    if(category4.length > 0) result["41-50"] = category4
    if(category5.length > 0) result["51 and older"] = category5
    return result
}

module.exports = {groupAdultsByAgeRange}
