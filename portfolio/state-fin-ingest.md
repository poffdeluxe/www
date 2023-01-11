# state-fin-(ingest|api)
This ingest and API was an attempt to build a flexible system to analyze campaign finance data at the state legislature level. Oftentimes, these campaign contributions can fly under the radar so I wanted to build a complete system consisting of ingestion and API pieces to aggregate the contribution data and pull insights from that data.

Since I live in Austin, my initial targeted state legislature was the Texas legislature. I built an ingestor for the system responsible for extracting relevant pieces of information from the contribution data the Texas Ethics Commission releases to the public. Even though there is only an ingestor for Texas, the ingestion system was built to easily allow additional ingestors to be added with a long term goal of adding ingestors for the other 49 states.

This project was also an excellent way to get acquainted with the [Fast API](https://fastapi.tiangolo.com/) framework. Even though most of my web/API framework experience in Python comes from Flask, Fast API is definitely my new favorite tool.

The repo for the ingest system can be found [here](https://github.com/poffdeluxe/state-fin-ingest) and the repo for the API can be found [here](https://github.com/poffdeluxe/state-fin-api).

~A live demo (with old contribution data) can be found at: https://state-fin-api.herokuapp.com/
Thanks to Fast API, interactive documentation is automatically generated: https://state-fin-api.herokuapp.com/docs~ Unfortunately, the hosted application on Heroku is no longer available since Heroku removed their free tier :(
