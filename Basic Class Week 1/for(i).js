//for_i
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//0~ 9 print 
let people = ['sooyeon','eunji','soyoung','jinhee','hajung','jihyun']

// list length
people.length
// 6
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}
// print -> 'sooyeon','eunji','soyoung','jinhee','hajung','jihyun'

// type dict
let scores = [
	{'name':'sooyeon', 'score':90},
	{'name':'eunji', 'score':85},
	{'name':'jihyun', 'score':70},
  {'name':'jinhee', 'score':50},
  {'name':'hajung', 'score':68},
  {'name':'soyoung', 'score':30},
]
scores[0]
// {name: "sooyeon", score: 90}

scores[1]
// {name: "eunji", score: 85}

scores[1]['score']
// 85

scores
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "sooyeon", score: 90}
// 1: {name: "eunji", score: 85}
// 2: {name: "jihyun", score: 70}
// 3: {name: "jinhee", score: 50}
// 4: {name: "hajung", score: 68}
// 5: {name: "soyoung", score: 30}
// length: 6
// __proto__: Array(0)

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]['name'])
}
// print -> 'sooyeon','eunji','soyoung','jinhee','hajung','jihyun'

for (let i = 0; i < scores.length; i++) {
    let name = scores[i]['name']
    let score = scores[i]['score']
    console.log(name, score)
// sooyeon 90
// eunji 85
// jihyun 70
// jinhee 50
// hajung 68
// soyoung 30

for (let i = 0; i < scores.length; i++) {
    let name = scores[i]['name']
    let score = scores[i]['score']
    if (score > 70) {
        console.log(name,score)
    }
}
// sooyeon 90
// eunji 85