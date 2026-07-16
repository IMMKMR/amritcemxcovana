@echo off
cd "c:\Users\imman\Downloads\Pitch - Amrit Cement [Recovered] Report\brand-pitch"
git init
git add .
git commit -m "Deploy AmritCem Pitch Deck"
git branch -M main
git remote add origin https://github.com/IMMKMR/amritcemxcovana.git
git push -u origin main -f
