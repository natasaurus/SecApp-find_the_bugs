def get_file(request):
    filename = request.GET.get("f")
    with open("files/" + filename) as f:
        return HttpResponse(f.read())