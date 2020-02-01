FROM ubuntu

RUN apt update \
	&& apt install -y \
		curl \
		git \
	&& curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash \
	&& /bin/bash -c "source /root/.nvm/nvm.sh \
	    && nvm install 12 \
	    && echo \"12\" >> /root/.nvmrc \
	    && nvm use 12" \
	&& rm -rf /var/lib/apt/lists/* \
	&& mkdir /project

COPY . /project

EXPOSE 8000, 9000

WORKDIR /project

