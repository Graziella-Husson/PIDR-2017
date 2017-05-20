#!/bin/bash
cd ./webPLM-master/
mongoexport -d dbPLMDescription -c codeToDescription -o ~/Bureau/PIDR-2017/corpus.json
exit 0