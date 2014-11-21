import sys

from photolog import create_app

reload(sys)

sys.setdefaultencoding('utf-8')

application = create_app()

if __name__ == '__main__':
    print 'starting test server'
    applciation.run(host='0.0.0.0',port=80, debug=true)

