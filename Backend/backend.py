import requests
import jmespath
import csv

class Track:
    def __init__(self, data):
        self.data = data
        self.name = data["name"]
        self.artist = data["artists"][0]["name"]
        self.popularity = data["popularity"]

    def getName(abc):
        return abc.name

    def getArtist(abc):
        return abc.artist

    def getPopularity(abc):
        return abc.popularity

    def getData(abc):
        return abc.data


class Playlist:
    def __init__(self, data):
        self._data = data
        self.href = data["href"]
        self.size = len(data["items"])
        #print (data)
        #print(jmespath.search('track', data))
        #for song in data["items"]:
            #print (song["track"]["name"])
            #print (jmespath.search(["track".["popularity", "name", "artists"[0]."name"]))
            #print (jmespath.search('popularity', song))

    def getHref(abc):
        return abc.href

    def getSong(abc):
        return abc.artist

    def getSize(abc):
        return abc.size

    @property
    def name(self):
        print(self._data)
        return self._data['name']

#Get info about specific track
def getTrack(trackID, token):
    trackURL = "https://api.spotify.com/v1/tracks/"+trackID
    resp = requests.get(url = trackURL, headers = {'Authorization': "Bearer "+token})
    return resp.json()


#Get info about playlist
def getPlaylist(playlistID, token):
    playlistURL = "https://api.spotify.com/v1/playlists/"+playlistID+"/tracks"
    resp = requests.get(url = playlistURL, headers = {'Authorization': "Bearer "+token}, params={'limit': 15})
    return resp.json()




#get access for 1h then insert token from URL to variable below.
#https://accounts.spotify.com/authorize?client_id=05973542c38b4e34b1faf371c822a78e&response_type=token&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback
myToken = "BQD9tFXwh673GDxr_yMG4h-ow59wd6VO_hMntN7pIw2b_b_7wKCR4kFpduqIZhQtM3B88hQswZdnNWAnoDQ0rdMR4nY77VcWgnHS2nqJ016PUpJ6zYDi1FUtR2FLtW8T7USxSjEgs6OE_AubNSDxnSIm3R9FYUw-8p5fNvqT-vCExXFhqGA"

#trackID of Freelance - Tori (tror jag)
freelanceToriID = "1zJa06KxSnlyYCoDnUgNp4"
myTrackID = freelanceToriID


t1 = Track(getTrack(myTrackID, myToken))


#trackID of "New Music Friday Sweden"
newmusicplaylistID = "37i9dQZF1DXcecv7ESbOPu"
top50worldID = "37i9dQZEVXbNG2KDcFcKOF"

p1 = Playlist(getPlaylist(newmusicplaylistID, myToken))
p1Data = p1._data

# Open the CSV file for writing
with open('output.csv', 'w', newline='', encoding='utf-8') as csvfile:
    # Create a CSV writer object
    csv_writer = csv.writer(csvfile)
    # Write the header row
    csv_writer.writerow(['Song', 'Artist', 'Popularity'])

    for item in p1Data['items']:
        # Retrieve the track name
        track_name = item['track']['name']
        # Retrieve the artist name
        artist_name = item['track']['artists'][0]["name"]
        # Retrieve the popularity of the track
        popularity = item['track']['popularity']
        # Print the track name and popularity
        csv_writer.writerow([track_name, artist_name, popularity])
        #print(f"Song: {track_name} - {artist_name}, Popularity: {popularity}")

#with open('artistsPopularity.csv', 'w', newline='', encoding='utf-8') as csvfile:

## Request for Artists and their amount of Monthly listeners
endpoint = 'https://api.spotify.com/v1/me/top/artists'

params

#FILTRERA MED JMESPath:
#     "items"[*]."track".["popularity", "name", "artists"[0]."name"]
#På hemsidan: https://jsoneditoronline.org/#left=local.tebeno&right=local.niwuxu
# Filen finns på din dator



#To get title from track: print(data["album"]["artists"][0]["name"])
#songTitle = data["name"]
#songArtist = data["artists"][0]["name"]
#songPopularity = data["popularity"]

#print ("Title: "+songTitle+ "\nArtists: "+songArtist+"\nPopularity: "+str(songPopularity))

#print(" ")
#print(" ")

#print ( data2["items"][0]["track"]["name"])
#print ( data2["items"][1]["track"]["name"])
#print ( data2["items"][2]["track"]["name"])
#print ( data2["items"][3]["track"]["name"])
#print ( data2["items"][4]["track"]["name"])

#print ( data2["items"][0]["track"]["popularity"])

#print(data2["items"][0])
