APP := 'boiling-coast-96771'

open:
	heroku open --app $(APP)

server:
	ember serve

deploy:
	git push

