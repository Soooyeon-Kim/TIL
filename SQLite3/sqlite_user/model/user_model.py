from sqlalchemy import Column, String, Integer, Sequence
from model import Base

# base를 기반으로 user 모델을 만든다
class UserModel(Base):
    __tablename__ = "user"
    user_id = Column(Integer, Sequence("user_id_seq"), primary_key=True)
    # 로그인 시 id, username
    username = Column(String(50))
    # 비밀번호
    password = Column(String(50))
    # 사용자의 이름
    name = Column(String(15))
    # 사용자의 이메일
    email = Column(String(320))

    
    def __init__(self, username, password, name, email):
        self.username=username
        self.password=password
        self.name=name
        self.email=email
        