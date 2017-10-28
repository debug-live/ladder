TMP_FILE=`mktemp`
python agent.py > $TMP_FILE 2>&1 &
for (( i = 0; i < 10; i++)); do
	SIZE=`wc -c < $TMP_FILE`
	if [ $SIZE -ge 36 ]; then
		break;
	fi

	sleep 1
done

cat $TMP_FILE
if [  $SIZE -ge 36 ]; then
	URL=`cat $TMP_FILE |awk {'print $4'}|sed 's/0.0.0.0/localhost/'`
	firefox $URL
else
	echo 'Cannot start server in 10s...'
fi

