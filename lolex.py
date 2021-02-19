import json

class Track:
    def __init__(self, data):
        self.data = data


    def myfunc(self):
        print ("hello people!")
        print ("")
        print ("My name is "+self.data)

jsondata = {'album': {'album_type': 'album', 'artists': [{'external_urls': {'spotify': 'https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp'}, 'href': 'https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp', 'id': '6O4EGCCb6DoIiR6B1QCQgp', 'name': 'Toro y Moi', 'type': 'artist', 'uri': 'spotify:artist:6O4EGCCb6DoIiR6B1QCQgp'}], 'available_markets': ['AD', 'AT', 'BE', 'BG', 'CH', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SK'], 'external_urls': {'spotify': 'https://open.spotify.com/album/4pFkx4K1rttqZkreCB2P4R'}, 'href': 'https://api.spotify.com/v1/albums/4pFkx4K1rttqZkreCB2P4R', 'id': '4pFkx4K1rttqZkreCB2P4R', 'images': [{'height': 640, 'url': 'https://i.scdn.co/image/ab67616d0000b273f432484dd2ef435358497dc1', 'width': 640}, {'height': 300, 'url': 'https://i.scdn.co/image/ab67616d00001e02f432484dd2ef435358497dc1', 'width': 300}, {'height': 64, 'url': 'https://i.scdn.co/image/ab67616d00004851f432484dd2ef435358497dc1', 'width': 64}], 'name': 'Outer Peace', 'release_date': '2019-01-18', 'release_date_precision': 'day', 'total_tracks': 10, 'type': 'album', 'uri': 'spotify:album:4pFkx4K1rttqZkreCB2P4R'}, 'artists': [{'external_urls': {'spotify': 'https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp'}, 'href': 'https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp', 'id': '6O4EGCCb6DoIiR6B1QCQgp', 'name': 'Toro y Moi', 'type': 'artist', 'uri': 'spotify:artist:6O4EGCCb6DoIiR6B1QCQgp'}], 'available_markets': ['AD', 'AT', 'BE', 'BG', 'CH', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MC', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SK'], 'disc_number': 1, 'duration_ms': 225915, 'explicit': False, 'external_ids': {'isrc': 'US22N1913107'}, 'external_urls': {'spotify': 'https://open.spotify.com/track/1zJa06KxSnlyYCoDnUgNp4'}, 'href': 'https://api.spotify.com/v1/tracks/1zJa06KxSnlyYCoDnUgNp4', 'id': '1zJa06KxSnlyYCoDnUgNp4', 'is_local': False, 'name': 'Freelance', 'popularity': 46, 'preview_url': 'https://p.scdn.co/mp3-preview/df0a284d3ae721e63e075c3e08b2870ab436f793?cid=05973542c38b4e34b1faf371c822a78e', 'track_number': 7, 'type': 'track', 'uri': 'spotify:track:1zJa06KxSnlyYCoDnUgNp4'}


dataz = json.loads(jsondata)

#t1 = Track(dataz)
#t1.myfunc()
