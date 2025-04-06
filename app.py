import eel, requests

eel.init('web')

@eel.expose
def send_request(url, method, payload):
    try:
        if method.upper() == "GET":
            response = requests.get(url, params=payload)
        elif method.upper() == "POST":
            response = requests.post(url, json=payload)
        else:
            return "Неподдерживаемый метод"
        return response.json()
    except Exception as e:
        return str(e)

eel.start('initial.html', size=(800,600))