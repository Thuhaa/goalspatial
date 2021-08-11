from django.db import models

COURSE_CATEGORIES = (("Video", "Video"), ("Blog", "Blog"))
class Course(models.Model):
	title = models.CharField(max_length=100)
	image = models.ImageField(upload_to="course-images/")
	category = models.CharField(choices=COURSE_CATEGORIES, max_length=10)
	date_created = models.DateField(auto_now_add=True)
	link = models.CharField(max_length=200)

	class Meta:
		verbose_name_plural = "Courses"

	def __str__(self):
		return self.title


class Project(models.Model):
	title = models.CharField(max_length=100)
	image = models.ImageField(upload_to="course-images/")
	summary = models.TextField(max_length=200)
	date_created = models.DateField(auto_now_add=True)
	link = models.CharField(max_length=200)

	class Meta:
		verbose_name_plural = "Projects"

	def __str__(self):
		return self.title

class Message(models.Model):
	email = models.CharField(max_length=100)
	name = models.CharField(max_length=100)
	text = models.TextField()
	received = models.BooleanField(default=True)
	replied = models.BooleanField(default=False)
	date_created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.email

	class Meta:
		verbose_name_plural = "Messages"
