from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# insert / find / update / delete

# 정보 저장
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 여러개 찾기
# _id 값 제외
same_ages = list(db.users.find({'age':21},{'_id':False}))
# print(same_ages)
# 딕셔너리 형태로 저장되어 있으므로 딕셔너리를 출력하는 형식으로 작성하면 -
for person in same_ages:
    print(person)


alldata = list(db.users.find({},{'_id':False}))
# 모든 정보를 조건없이 출력
for person in alldata:
    print(person)

# 한 사람의 정보만 출력
# find_one
user = db.users.find_one({'name':'bobby'})
print(user)
# user age
print(user['age'])

# 업데이트
# 정보 변경
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
# 여러 user의 정보를 변경할 수 있는 update_many 도 있지만 잘 사용하지 않음


# 삭제하기 (거의 안씀)
# delete_many도 존재
db.users.delete_one({'name':'bobby'})
