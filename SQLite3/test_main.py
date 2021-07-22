import unittest
from main import app, session
from model.user_model import UserModel


class TestSignUp(unittest.TestCase):
    def setUp(self):
        self.test_app = app.test_client()

    def test_success_signup(self):
        response = self.test_app.post(
            "/signup",
            json={
                "username": "user4",
                "password": "pw2",
                "name": "name2",
                "email": "2@naver.com"
            }
        )
        self.assertEqual(201, response.status_code)
        
        user = session.query(UserModel).filter(
            UserModel.username == "user4",
            UserModel.password == "pw2",
            UserModel.name == "name2",
            UserModel.email == "2@naver.com"
        ).one_or_none()
        self.assertIsNotNone(user)

unittest.main()







'''
POST /signup
json body data

response
response의 status, message를 확인한다!

'''