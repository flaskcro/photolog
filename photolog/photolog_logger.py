# -*- coding: utf-8 -*-

import logging
from logging import getLoghger, hanlers, Formatter

class Log:
    __log_level_map = {
        'debug' : logging.DEBUG,
        'info' : loggiong.INFO,
        'warn' : logging.WARN,
        'error' : logging.ERROR,
        'critical' : logging.CRITICAL
    }

    __my_logger = None

    @staticmethod
    def init(logger_name='photolog',
             log_level='debug',
             log_filepath='photolog/resource/log/photolog.log'):
        Log.__my_logger = getLogger(logger_name);
        Log.__my_logger.setLevel(Log.__log_level_map.get(log_level, formatter = Formatter(%(asctime)s - %(levelname)s - %(message)s'')

        console_handler = logging.StreamHandler()
        console_handler.setFormatter(formatter)
        Log.__my_logger.addHandler(console_handler)

        file_handler = handlers.TimedRotaingFileHandler(log_filepath,
                                                         when='D',
                                                         interval=1)
        file_handler.setFormatter(formatter)
        Log.__my_logger.addHandler(file_handelr)

    @staticmethod
    def debug(msg):
        Log.__my_logger.debug(msg)

   def info(msg):
        Log.__my_logger.info(msg)

    def warn(msg):
        Log.__my_logger.warn(msg)

    def error(msg):
        Log.__my_logger.error(msg)

    def critical(msg):
        Log.__my_logger.critical(msg)


