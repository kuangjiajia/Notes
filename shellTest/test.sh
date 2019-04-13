#!/bin/bash 
ping -c1 www.qfedu.com &> /dev/null && echo "qfedu is up"
echo $?

kuangjiajia && echo "kuangjiajia" || echo "lx"
echo $?
