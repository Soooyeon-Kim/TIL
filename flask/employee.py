from flask import Flask, request, jsonify

app = Flask(__name__)


people = [
    {
        "employee_number": 1,
        "name": "judy",
        "age": 21,
        "job": "programmer",
        "height": 180,
        "salary": 40000000,
    },
    {
        "employee_number": 2,
        "name": "수연",
        "age": 24,
        "job": "student",
        "height": 154,
        "salary": 30000000,
    },
    {
        "employee_number": 3,
        "name": "지현",
        "age": 28,
        "job": "FullStack",
        "height": 160,
        "salary": 65000000,
    },
    {
        "employee_number": 4,
        "name": "jane",
        "age": 30,
        "job": "programmer",
        "height": 175,
        "salary": 100000000,
    }
]

# 같은 url 도 메서드에 따라서 동작하는 것이 달라짐
# query string 을 통해 해당하는 사람의 정보만 뽑아 응답하세요.
@app.route("/employee", methods=["GET"])
def find_employees():
    query_people = people[:]

    # 나이로 검색
    query_age = request.args.get("age")
    if query_age is not None:
        for i in range(len(query_people)-1, -1, -1):
            if query_people[i]["age"] != int(query_age):
                query_people.pop(i)

    # 이름으로 검색
    query_name = request.args.get("name")
    if query_name is not None:
        for i in range(len(query_people)-1, -1, -1):
            if query_people[i]["name"] != query_name:
                query_people.pop(i)
    
    # 직업으로 검색
    query_job = request.args.get("job")
    if query_job is not None:
        for i in range(len(query_people)-1, -1, -1):
            if query_people[i]["job"] != query_job:
                query_people.pop(i)
    
    return jsonify(query_people)

# 직원을 추가하는 api를 만드세요.
# 데이터를 넘겨줌. 추가 = [post]
@app.route("/employee", methods=["POST"])
def add_employee():
    return "add_employee"

# 직원을 삭제하는 api를 만드세요.
@app.route("/employee", methods=["DELETE"])
def fire_employee():
    return "fire_employee"


if __name__ == '__main__':
    app.run(debug=True)