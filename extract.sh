#!/bin/bash
cd ./webPLM-master/
mongoexport -d dbPLMDescription -c codeAndCommentsFinal -o ~/Bureau/PIDR-2017/corpus.json
exit 0