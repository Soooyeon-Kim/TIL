import requests
from bs4 import BeautifulSoup
# 1. 크롤링을 위한 페이지 요청 -> requests
# 2. 가져온 html 정보를 솎아내기 -> BeautifulSoup
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('#old_content > table > tbody > tr')
# select 는 결과가 리스트로 나온다


for tr in trs:
    a_tag = tr.select_one('td.title > div > a')
    if a_tag is not None:
        # tag에서 제목만 title에 담김
        rank = tr.select_one('td:nth-of-type(1) > img')['alt']
        title = a_tag.text
        star = tr.select_one('td.point').text
        print(rank, title, star)

# 태그 안에 있는 속성을 가져올 때
# print(title['href'])
