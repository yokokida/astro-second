<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width" />
	<title>Astro</title>
</head>
---
title: 私の2番目のブログ記事
author: Astro学習者
description: "Astroを少し学んだら、止まらなくなりました！"
image:
  url: "https://docs.astro.build/assets/arc.webp"
  alt: "Astroのアークのサムネイル。"
pubDate: 2022-07-08
tags: ["astro", "ブログ", "公開学習", "成功"]
---

[引用 aid=3691320 time=1619918369]VPC and サブネット
IAM
S3
EC2：サーバー in PriSub
ELB（A/N）：ロードバランサー in PubSub
ECS (FRAGATE)：Docker[/引用]
[引用 aid=3691320 time=1619924359][info][title][dtext:task_edited][/title][task aid=3691320 st=open lt=1619923952 ltype=date]負荷分散テスト

1. ec2\*2 を PriSub に設置
2. 作業用の踏み台 ec2 を PubSub に設置
3. apache を ec2 に install
4. ELB を PubSub に設置
5. ELB のリスナーに http を登録
6. ELB の TG に ec2\*2 を登録[/task][/info]
   https://www.youtube.com/watch?v=Y-Mc2OenReA　（16:00〜）[/引用]
   [引用 aid=3691320 time=1619924748]IAM 編
   Identity and Ancess Management（権限管理）
   AWS のサービス（リソース）を「守る/扱う」ために存在（デフォでは全て操作が禁止されていると思って！）[/引用]
   [引用 aid=3691320 time=1619927856]NAT（SourseNAT/DestinationNAT）編
   Network Adress Translation（IP 変換）[/引用]
   [引用 aid=3691320 time=1625109175]【Amazon Lightsail】月額固定制
   [hr]
   コンピューティング環境だけでなく、ストレージ、スナップショット、ロードバランサー機能、ファイアウォール、DNS 機能など、いくつもの機能が揃っています。

【Amazon EC2】従量課金制
[hr]
EC2 で提供しているのは、コンピューティング環境だけです。ストレージなら Amazon S3、データベースなら Amazon RDS など、他のサービスを組み合わせて必要な仕様を構成し、申し込む必要があります。[/引用]
[引用 aid=3691320 time=1625577399]m1qG3C1LdJR6[/引用]
[引用 aid=3691320 time=1625577407]cat bitnami_application_password[/引用]
[引用 aid=3691320 time=1625577416]host example.ie[/引用]
[引用 aid=3691320 time=1625577425]sudo /opt/bitnami/bncert-tool[/引用]
