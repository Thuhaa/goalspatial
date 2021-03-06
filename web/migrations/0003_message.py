# Generated by Django 3.1.7 on 2021-08-11 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_auto_20210807_1604'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('text', models.TextField()),
                ('received', models.BooleanField(default=True)),
                ('replied', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': 'Messages',
            },
        ),
    ]
